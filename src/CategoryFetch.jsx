const CategoryFetch = {
  getAll: async () => {
    return await fetch(process.env.REACT_APP_API + "Category")
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
      process.env.REACT_APP_API + "Category/" + id + "/products"
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
    return fetch(process.env.REACT_APP_API + "Category", {
      body: JSON.stringify(data),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
  },
  delete: async (id) => {
    await fetch(process.env.REACT_APP_API + "Category/" + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  },
};
export default CategoryFetch;
