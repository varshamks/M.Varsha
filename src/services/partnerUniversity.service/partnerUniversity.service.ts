import { InsertOnePartnerUniversity, FindAllPartnerUniversities } from '../../models/partnerUniversity.model/partnerUniversity.model'; // Adjust path if needed

export const PartnerUniversityService = {
  InsertOnePartnerUniversity: async (data: any) => {
    const obj = {
      name: data?.name,
      description: data?.description,
      address: data?.address,
    };
    return await InsertOnePartnerUniversity(obj);
  },

  FindAllPartnerUniversities: async () => {
    return await FindAllPartnerUniversities();
  }
};
