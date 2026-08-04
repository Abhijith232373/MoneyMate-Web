import { gatewayClient } from "../../api/gatewayClient";

export const adminUserService = {
  getUsers: async () => {
    try {
      const response = await gatewayClient.get('/admin/users');
      // Format as needed
      const actualData = response.data?.data || response.data || [];
      const users = Array.isArray(actualData) ? actualData : [];
      return { data: users, total: users.length };
    } catch (error) {
      console.error("Error fetching admin users:", error);
      throw error;
    }
  },
  
  deleteUser: async (id) => {
    return gatewayClient.delete(`/admin/users/${id}`);
  },

  updateUserStatus: async (id, status) => {
    return gatewayClient.put(`/admin/users/${id}/status`, { status });
  }
};
