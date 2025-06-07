import React, { useState } from "react";
import { Plus, Search, Edit2, Trash2, UserPlus } from "lucide-react";
import { DataTable } from "../../components/data/DataTable";
import { Button } from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";
import { Modal, ConfirmModal } from "../../components/ui/Modal";
import { mockUsers } from "../../utils/mockData";
import { toast } from "react-toastify";

export const ManageUsers = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleDelete = () => {
    toast.success("User deleted successfully");
    setIsDeleteModalOpen(false);
  };

  const students = mockUsers.filter((user) => user.role === "student");

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Manage Users
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Add, edit, and manage student accounts
          </p>
        </div>
        <Button variant="primary" onClick={() => setIsAddModalOpen(true)}>
          <UserPlus size={18} className="mr-2" />
          Add Student
        </Button>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <div className="mb-6">
          <Input
            placeholder="Search users..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            icon={<Search size={18} />}
          />
        </div>

        <DataTable
          columns={[
            {
              header: "Name",
              accessor: (user) => (
                <div className="flex items-center">
                  <div className="h-8 w-8 rounded-full bg-gray-200 overflow-hidden mr-3">
                    {user.avatar ? (
                      <img
                        src={user.avatar}
                        alt={user.name}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="h-full w-full flex items-center justify-center bg-blue-500 text-white">
                        {user.name.charAt(0).toUpperCase()}
                      </div>
                    )}
                  </div>
                  <span>{user.name}</span>
                </div>
              ),
            },
            { header: "Email", accessor: "email" },
            {
              header: "Actions",
              accessor: (user) => (
                <div className="flex justify-end space-x-2">
                  <Button variant="outline" size="sm">
                    <Edit2 size={16} className="mr-1" />
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => {
                      setSelectedUser(user.id);
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
          data={students.filter(
            (user) =>
              user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
              user.email.toLowerCase().includes(searchQuery.toLowerCase())
          )}
          keyExtractor={(user) => user.id}
        />
      </div>

      <Modal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        title="Add New Student"
        size="md"
      >
        <p>Student creation form coming soon...</p>
      </Modal>

      <ConfirmModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleDelete}
        title="Delete User"
        message="Are you sure you want to delete this user? This action cannot be undone."
        confirmLabel="Delete"
        variant="danger"
      />
    </div>
  );
};
