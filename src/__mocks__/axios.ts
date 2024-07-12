const mockAxios = {
  get: jest.fn((api, header) => Promise.resolve({ data: {} })),
};

export default mockAxios;