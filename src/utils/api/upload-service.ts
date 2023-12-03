import instans from './http';

export const uploadService = {
  async upload(file: File) {
    let formData = new FormData();
    formData.append('file', file);

    return await instans
      .post(`/upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .catch((err) => console.error(err));
  },
};
