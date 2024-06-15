/* eslint-disable react/prop-types */
import { RxCross2 } from "react-icons/rx";
import { useEffect, useState } from "react";
import dbService from "../services/databases";

export default function ProfileAdmin() {
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedDoc, setSelectedDoc] = useState(null);

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

  const handleVerificationToggle = async (docId) => {
    try {
      const updatedDoc = await dbService.toggleVerification(docId);
      setDocuments((prevDocs) =>
        prevDocs.map((doc) => (doc.$id === docId ? updatedDoc : doc))
      );
      setSelectedDoc(updatedDoc);
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
              <ProfileCard
                doc={doc}
                key={doc.$id}
                onClick={() => setSelectedDoc(doc)}
              />
            ))
          ) : (
            <p className="text-center text-gray-600">No documents found.</p>
          )}
        </div>
      )}

      {selectedDoc && (
        <ProfileModal
          doc={selectedDoc}
          onClose={() => setSelectedDoc(null)}
          onVerify={() => handleVerificationToggle(selectedDoc.$id)}
        />
      )}
    </div>
  );
}

function ProfileCard({ doc, onClick }) {
  return (
    <div
      onClick={onClick}
      key={doc.$id}
      className="bg-white rounded-lg shadow-md p-4 cursor-pointer hover:shadow-lg transition-shadow duration-200"
    >
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
      </div>
    </div>
  );
}

function ProfileModal({ doc, onClose, onVerify }) {
  const [loading, setLoading] = useState(false);

  const handleVerify = async () => {
    setLoading(true);
    await onVerify();
    setLoading(false);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-[600px] h-[600px] overflow-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Doctor Profile</h2>
          <button
            className="text-gray-600 hover:text-gray-900"
            onClick={onClose}
          >
            <RxCross2 />
          </button>
        </div>
        <div className="mb-4">
          <img
            src={dbService.getFilePreview(doc.profileImage)}
            alt="Profile"
            className="w-24 h-24 rounded-full mb-4 mx-auto"
          />
          <h3 className="text-xl font-semibold text-center">{doc.fullName}</h3>
          <p className="text-gray-600 text-center">{doc.specialization}</p>
        </div>
        <div className="mb-4">
          <h4 className="text-lg font-semibold">Email</h4>
          <p className="text-gray-600">{doc.email}</p>
        </div>
        <div className="mb-4">
          <h4 className="text-lg font-semibold">Number</h4>
          <p className="text-gray-600">{doc.number}</p>
        </div>
        <div className="mb-4">
          <h4 className="text-lg font-semibold">Qualification</h4>
          <p className="text-gray-600">{doc.qualification}</p>
        </div>
        <div className="mb-4">
          <h4 className="text-lg font-semibold">Address</h4>
          <p className="text-gray-600">{doc.location}</p>
        </div>
        <div className="mb-4">
          <h4 className="text-lg font-semibold">Experience</h4>
          <p className="text-gray-600">{doc.experience} years</p>
        </div>
        <div className="mb-4">
          <h4 className="text-lg font-semibold">Certificates</h4>
          {doc.certificateImage ? (
            <img
              src={dbService.getFilePreview(doc.certificateImage)}
              alt="Certificate"
              className="w-full h-auto mb-4"
            />
          ) : (
            <p className="text-gray-600">No certificate available.</p>
          )}
        </div>
        <div className="mb-4">
          <h4 className="text-lg font-semibold">License</h4>
          {doc.licenseImage ? (
            <img
              src={dbService.getFilePreview(doc.licenseImage)}
              alt="License"
              className="w-full h-auto mb-4"
            />
          ) : (
            <p className="text-gray-600">No license available.</p>
          )}
        </div>
        <div className="flex items-center justify-center mb-2">
          <p
            className={`text-sm ${
              doc.verified ? "text-green-600" : "text-red-600"
            }`}
          >
            {doc.verified ? "Verified" : "Not Verified"}
          </p>
          <button
            onClick={handleVerify}
            className={`ml-4 px-4 py-2 rounded-md transition-colors ${
              doc.verified
                ? "bg-green-500 hover:bg-green-600 text-white"
                : "bg-red-500 hover:bg-red-600 text-white"
            }`}
            disabled={loading}
          >
            {loading ? "Loading..." : doc.verified ? "Unverify" : "Verify"}
          </button>
        </div>
      </div>
    </div>
  );
}
