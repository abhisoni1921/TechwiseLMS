import React, { useState } from "react";
import { Plus, Search, Edit2, Trash2 } from "lucide-react";
import { DataTable } from "../../components/data/DataTable";
import { Button } from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";
import { Modal, ConfirmModal } from "../../components/ui/Modal";
import { mockCourses } from "../../utils/mockData";
import { toast } from "react-toastify";

export const ManageCourses = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleDelete = () => {
    toast.success("Course deleted successfully");
    setIsDeleteModalOpen(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Manage Courses
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Add, edit, and remove courses
          </p>
        </div>
        <Button variant="primary" onClick={() => setIsAddModalOpen(true)}>
          <Plus size={18} className="mr-2" />
          Add Course
        </Button>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <div className="mb-6">
          <Input
            placeholder="Search courses..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            icon={<Search size={18} />}
          />
        </div>

        <DataTable
          columns={[
            { header: "Title", accessor: "title" },
            { header: "Instructor", accessor: "instructor" },
            { header: "Modules", accessor: "totalModules", align: "center" },
            { header: "Duration", accessor: "totalDuration", align: "center" },
            {
              header: "Actions",
              accessor: (course) => (
                <div className="flex justify-end space-x-2">
                  <Button variant="outline" size="sm">
                    <Edit2 size={16} className="mr-1" />
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => {
                      setSelectedCourse(course.id);
                      setIsDeleteModalOpen(true);
                    }}
                  >
                    <Trash2 size={16} className="mr-1" />
                    Delete
                  </Button>
                </div>
              ),
              align: "right",
            },
          ]}
          data={mockCourses.filter(
            (course) =>
              course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
              course.instructor
                .toLowerCase()
                .includes(searchQuery.toLowerCase())
          )}
          keyExtractor={(course) => course.id}
        />
      </div>

      <Modal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        title="Add New Course"
        size="lg"
      >
        <p>Course creation form coming soon...</p>
      </Modal>

      <ConfirmModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleDelete}
        title="Delete Course"
        message="Are you sure you want to delete this course? This action cannot be undone."
        confirmLabel="Delete"
        variant="danger"
      />
    </div>
  );
};
