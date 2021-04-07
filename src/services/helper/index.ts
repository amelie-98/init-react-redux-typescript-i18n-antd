import axios from 'axios';
// import { Modal } from 'antd';

export default async (method: any, url: string, data: any) => {
  try {
    const response = await axios({ method, url, data });

    if (response && response.status === 401) {
      // handle 401 error (clear storage)
    }

    return response.data;
  } catch (error) {
    // Modal.warning({
    //   title: 'title',
    //   content: error.message,
    // });

    return null;
  }
};
