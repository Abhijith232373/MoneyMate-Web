import { gatewayClient } from "../../../api/gatewayClient";

export const adminMerchantService = {
  getMerchants: async () => {
    try {
      const response = await gatewayClient.get('/admin/merchants');
      const stores = response.data || [];
      
      const mappedData = stores.map(store => {
        const id = store.ID || store.id;
        const displayId = store.display_id || store.DisplayID || "MCH-000";
        const statusStr = (store.Status || store.status || "").toLowerCase();
        
        let status = "Active";
        let kycStatus = "Approved";
        let qrStatus = "Active";
        
        if (statusStr === "pending" || statusStr === "") {
          status = "Pending KYC";
          kycStatus = "Pending";
          qrStatus = "Unverified";
        } else if (statusStr === "suspended" || statusStr === "rejected") {
          status = "Suspended";
          kycStatus = "Rejected";
          qrStatus = "Disabled";
        }

        const tier = store.Plan || store.plan || "Basic";
        
        return {
          id: id,
          displayId: displayId,
          businessName: store.LegalName || store.legal_name || "Unknown Business",
          ownerName: store.OwnerName || store.owner_name || "Unknown Owner",
          email: store.ContactEmail || store.contact_email || "No Email",
          phone: store.MobileNumber || store.mobile_number || "No Phone",
          category: store.Type || store.business_type || "Retail",
          tier: tier.charAt(0).toUpperCase() + tier.slice(1).toLowerCase(),
          status: status,
          kycStatus: kycStatus,
          qrCodeId: "QR-" + displayId,
          qrStatus: qrStatus,
          volume: "$0.00",
          volumeNum: 0,
          cashbackIssued: "$0.00",
          registeredDate: (store.CreatedAt || store.created_at || new Date().toISOString()).split('T')[0],
          address: store.RegisteredAddress || store.registered_address || "No Address"
        };
      });

      return { 
        success: true,
        data: mappedData, 
        total: mappedData.length,
        stats: {
          totalMerchants: mappedData.length,
          activeStores: mappedData.filter(m => m.status === 'Active').length,
          pendingKyc: mappedData.filter(m => m.kycStatus === 'Pending').length,
          totalVolumeProcessed: "$0.00"
        }
      };
    } catch (error) {
      console.error("Error fetching admin merchants:", error);
      throw error;
    }
  },

  getMerchantById: async (id) => {
    try {
      const response = await gatewayClient.get(`/admin/merchants/${id}`);
      return response;
    } catch (e) {
      throw e;
    }
  },

  updateMerchantStatus: async (id, status) => {
    let apiStatus = status.toLowerCase();
    if (apiStatus === "active") apiStatus = "verified";
    return gatewayClient.put(`/admin/merchants/${id}/status`, { status: apiStatus });
  },

  approveKYC: async (id) => {
    return gatewayClient.put(`/admin/merchants/${id}/status`, { status: "verified" });
  },

  rejectKYC: async (id, reason = "Documentation incomplete") => {
    return gatewayClient.put(`/admin/merchants/${id}/status`, { status: "rejected" });
  },

  updateSubscriptionTier: async (id, tier) => {
    return Promise.resolve({ success: true });
  },

  createMerchant: async (data) => {
    return Promise.resolve({ success: true });
  },

  updateMerchant: async (id, updatedData) => {
    return Promise.resolve({ success: true });
  },

  deleteMerchant: async (id) => {
    return gatewayClient.delete(`/admin/merchants/${id}`);
  },

  getMerchantCampaigns: async () => {
    return Promise.resolve({ data: [] });
  },

  updateCampaignStatus: async (campaignId, status) => {
    return Promise.resolve({ success: true });
  },

  getStoreQRs: async () => {
    return Promise.resolve({ data: [] });
  },

  updateQRStatus: async (qrId, status) => {
    return Promise.resolve({ success: true });
  },

  getSubscriptionPlans: async () => {
    return Promise.resolve({ data: [] });
  }
};
