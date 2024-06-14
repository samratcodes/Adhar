import { useEffect, useState } from "react";
import dbService from "../services/databases";

export default function ProfileAdmin() {
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedDocuments = await dbService.getAllDocument();
        setDocuments(fetchedDocuments.documents || []);
        console.log("Fetched documents:", fetchedDocuments);
      } catch (error) {
        console.error("Error fetching documents:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const toggleVerification = async (documentId) => {
    try {
      // Assuming dbService.toggleVerification is a function that toggles verification status
      const updatedDocuments = await dbService.toggleVerification(documentId);
      setDocuments(updatedDocuments);
    } catch (error) {
      console.error("Error toggling verification:", error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold text-center mb-4">Workers</h2>

      {loading ? (
        <p className="text-center text-gray-600">Loading...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {documents.length > 0 ? (
            documents.map((doc) => (
              <div key={doc.$id} className="bg-white rounded-lg shadow-md p-4">
                <div className="flex items-center mb-4">
                  <img
                    src={dbService.getFilePreview(doc.profileImage)}
                    alt="Profile"
                    className="w-24 h-24 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">{doc.fullName}</h3>
                    <p className="text-gray-600">{doc.specialization}</p>
                  </div>
                </div>
                <div className="mb-4">
                  <h4 className="text-md font-semibold">Address</h4>
                  <p className="text-gray-600">{doc.location}</p>
                </div>
                <div className="mb-4">
                  <h4 className="text-md font-semibold">Experience</h4>
                  <p className="text-gray-600">{doc.experience} years</p>
                </div>
                <div className="flex items-center mb-2">
                  <p
                    className={`text-sm ${
                      doc.verified ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {doc.verified ? "Verified" : "Not Verified"}
                  </p>
                  <button
                    onClick={() => dbService.toggleVerification(doc.$id)}
                    className={`ml-2 px-3 py-1 rounded-md transition-colors ${
                      doc.verified
                        ? "bg-green-500 hover:bg-green-600 text-white"
                        : "bg-red-500 hover:bg-red-600 text-white"
                    }`}
                  >
                    {doc.verified ? "Unverify" : "Verify"}
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600">No documents found.</p>
          )}
        </div>
      )}
    </div>
  );
}
