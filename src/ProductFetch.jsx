const ProductFetch = {
  getAll: async () => {
    return await fetch(process.env.REACT_APP_API + "Product")
      .then(async (response) => {
        let temp = [];
        temp = await response.json();
        if (temp.length === 0) {
          console.log("No categories found");
          return [{ id: "  -  ", nome: " - " }];
        }
        return temp;
      })
      .catch((error) => {
        return [{ id: "  -  ", name: " - " }];
      });
  },
  getDetail: async (id) => {
    return await fetch(
      process.env.REACT_APP_API + "Product/" + id + "/category"
    )
      .then(async (response) => {
        let temp = [];
        temp = await response.json();
        return temp;
      })
      .catch((error) => {
        return [];
      });
  },
  post: (data) => {
    return fetch(process.env.REACT_APP_API + "Product", {
      body: JSON.stringify(data),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
  },
  delete: async (id) => {
    await fetch(process.env.REACT_APP_API + "Product/" + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  },
};
export default ProductFetch;
