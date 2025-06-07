import React, { useState } from "react";
import { Search, Download, CheckCircle, XCircle } from "lucide-react";
import { DataTable } from "../../components/data/DataTable";
import { Button } from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";
import { Modal } from "../../components/ui/Modal";
import { mockSubmissions } from "../../utils/mockData";
import { toast } from "react-toastify";

export const AssignmentSubmissions = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isGradeModalOpen, setIsGradeModalOpen] = useState(false);
  const [selectedSubmission, setSelectedSubmission] = useState(null);

  const handleGrade = () => {
    toast.success("Submission graded successfully");
    setIsGradeModalOpen(false);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Assignment Submissions
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1">
          Review and grade student submissions
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <div className="mb-6">
          <Input
            placeholder="Search submissions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            icon={<Search size={18} />}
          />
        </div>

        <DataTable
          columns={[
            { header: "Student", accessor: "studentName" },
            {
              header: "Status",
              accessor: (submission) => (
                <div className="flex items-center">
                  {submission.status === "graded" ? (
                    <span className="flex items-center text-green-600 dark:text-green-400">
                      <CheckCircle size={16} className="mr-1" />
                      Graded
                    </span>
                  ) : (
                    <span className="flex items-center text-orange-600 dark:text-orange-400">
                      <XCircle size={16} className="mr-1" />
                      Pending
                    </span>
                  )}
                </div>
              ),
            },
            {
              header: "Submitted",
              accessor: (submission) =>
                new Date(submission.submittedAt).toLocaleDateString(),
            },
            {
              header: "Grade",
              accessor: (submission) =>
                submission.grade ? `${submission.grade}/100` : "-",
              align: "center",
            },
            {
              header: "Actions",
              accessor: (submission) => (
                <div className="flex justify-end space-x-2">
                  <Button variant="outline" size="sm">
                    <Download size={16} className="mr-1" />
                    Download
                  </Button>
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => {
                      setSelectedSubmission(submission.id);
                      setIsGradeModalOpen(true);
                    }}
                  >
                    Grade
                  </Button>
                </div>
              ),
              align: "right",
            },
          ]}
          data={mockSubmissions.filter((submission) =>
            submission.studentName
              .toLowerCase()
              .includes(searchQuery.toLowerCase())
          )}
          keyExtractor={(submission) => submission.id}
        />
      </div>

      <Modal
        isOpen={isGradeModalOpen}
        onClose={() => setIsGradeModalOpen(false)}
        title="Grade Submission"
        size="md"
      >
        {/* Grading form would go here */}
        <p>Grading form coming soon...</p>
      </Modal>
    </div>
  );
};
