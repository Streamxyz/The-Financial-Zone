import React from 'react';
import Layout from '../components/Layout';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/table';

const AdminPanel = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Admin Panel</h1>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">User Management</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>1</TableCell>
                <TableCell>John Doe</TableCell>
                <TableCell>john@example.com</TableCell>
                <TableCell>Editor</TableCell>
                <TableCell>
                  <Button variant="outline" size="sm" className="mr-2">Edit</Button>
                  <Button variant="destructive" size="sm">Delete</Button>
                </TableCell>
              </TableRow>
              {/* Add more rows as needed */}
            </TableBody>
          </Table>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Content Management</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-xl font-semibold mb-2">Add New Article</h3>
              <Input className="mb-2" placeholder="Title" />
              <Input className="mb-2" placeholder="Category" />
              <textarea className="w-full p-2 border rounded mb-2" rows="4" placeholder="Content"></textarea>
              <Button>Publish Article</Button>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Recent Articles</h3>
              <ul className="list-disc pl-5">
                <li>Article 1</li>
                <li>Article 2</li>
                <li>Article 3</li>
              </ul>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold mb-4">Site Statistics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-100 p-4 rounded">
              <h3 className="text-lg font-semibold">Total Users</h3>
              <p className="text-3xl font-bold">1,234</p>
            </div>
            <div className="bg-gray-100 p-4 rounded">
              <h3 className="text-lg font-semibold">Total Articles</h3>
              <p className="text-3xl font-bold">567</p>
            </div>
            <div className="bg-gray-100 p-4 rounded">
              <h3 className="text-lg font-semibold">Daily Active Users</h3>
              <p className="text-3xl font-bold">890</p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AdminPanel;