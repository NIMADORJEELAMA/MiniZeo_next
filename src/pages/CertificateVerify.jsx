import React from "react";
import { useParams } from "react-router-dom";
import { topPerformers } from "../constants/index";

const CertificateVerify = () => {
  const { id } = useParams();
  const student = topPerformers.find((s) => s.id === parseInt(id));

  if (!student) {
    return (
      <div className="h-[60vh] flex flex-col items-center justify-center text-white">
        <h2 className="text-2xl font-bold text-red-500 underline decoration-red-500/30 underline-offset-8">
          Certificate Not Found
        </h2>
        <p className="text-neutral-400 mt-4">
          The verification ID is invalid or has expired.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-neutral-950 text-white min-h-screen py-12 px-4 selection:bg-purple-500/30">
      <div className="max-w-4xl mx-auto text-center">
        {/* Verification Badge */}
        <div className="inline-block p-3 rounded-full bg-emerald-500/10 text-emerald-400 mb-6 border border-emerald-500/20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>

        <h1 className="text-3xl md:text-5xl font-extrabold mb-3 tracking-tight">
          Credential Verified
        </h1>
        <p className="text-neutral-400 text-lg mb-10 max-w-2xl mx-auto">
          This confirms that{" "}
          <span className="text-purple-400 font-semibold">{student.name}</span>{" "}
          from <span className="italic">{student.college}</span> has officially
          completed their{" "}
          <span className="text-white font-medium">{student.role}</span>{" "}
          internship.
        </p>

        {/* Certificate Display */}
        <div className="relative group rounded-3xl border border-neutral-800 bg-neutral-900 p-3 shadow-[0_0_50px_-12px_rgba(168,85,247,0.2)] overflow-hidden transition-all hover:border-purple-500/50">
          <div className="w-full bg-neutral-800/30 rounded-2xl overflow-hidden cursor-zoom-in">
            <img
              src={student.certificate}
              alt={`${student.name}'s Certificate`}
              className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href={student.certificate}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 bg-neutral-800 hover:bg-neutral-700 text-white px-8 py-4 rounded-xl transition-all font-semibold border border-neutral-700"
          >
            <span>View Full Size</span>
          </a>
          {/* certificate */}
          <a
            href={student.certificate}
            download={`Certificate_${student.name.replace(/\s+/g, "_")}.png`}
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white px-8 py-4 rounded-xl transition-all font-semibold shadow-lg shadow-purple-500/20"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
            Download PNG
          </a>
        </div>
      </div>
    </div>
  );
};

export default CertificateVerify;
