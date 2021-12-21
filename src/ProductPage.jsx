import React, { Component } from "react";
import ProductFetch from "./ProductFetch";
import TrashIcon from "./TrashIcon";
import EditIcon from "./EditIcon";

export class ProductPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [{ id: " - ", name: "   -   " }],
      children: [],
    };
    this.willUnmount = false;
  }

  refresh() {
    ProductFetch.getAll().then((res) => {
      if (!this.willUnmount) {
        this.setState({ products: res });
        console.log("b ", this.state.products, "b");
      }
    });
  }

  componentDidMount() {
    this.willUnmount = false;
    this.refresh();
    // const elem = document.querySelector(".container :nth-child(1)");
    // elem.style.height = `${elem.scrollHeight}px`;
    // console.log(elem.style.height);
  }

  componentDidUpdate() {}

  componentWillUnmount() {
    this.willUnmount = true;
    console.log("unmount");
  }

  openAddProduct() {
    const detailMenu = document.querySelector(".container :nth-child(1)");
    if (detailMenu.style.height === "0px") {
      return;
    }
    detailMenu.style.height = `${detailMenu.scrollHeight}px`;
    setTimeout(() => {
      detailMenu.style.height = "0px";
    }, 10);

    setTimeout(() => {
      detailMenu.style.opacity = "0";
    }, 300);
    setTimeout(() => {
      const addMenu = document.getElementsByClassName("container")[1];
      addMenu.style.height = `${addMenu.scrollHeight}px`;
      addMenu.style.padding = "0px";
      addMenu.style.opacity = "1";
    }, 400);
  }

  closeAddProduct() {
    const addMenu = document.getElementsByClassName("container")[1];
    if (addMenu.style.height === "0px") {
      return;
    }
    addMenu.style.height = "0px";
    addMenu.style.padding = "0px 0px";
    setTimeout(() => {
      addMenu.style.opacity = "0";
    }, 300);
    setTimeout(() => {
      const detailMenu = document.querySelector(".container :nth-child(1)");
      detailMenu.style.height = `${detailMenu.scrollHeight}px`;
      detailMenu.style.opacity = "1";
      this.refresh();
      setTimeout(() => {
        detailMenu.style.height = "auto";
      }, 400);
    }, 400);
  }

  openEdit(id) {
    const info = document.getElementById(id);
    const edit = document.querySelector(`#edit${id}`);
    if (info.style.height === "0px") {
      return;
    }
    info.style.height = "0px";
    info.style.padding = "0px";
    info.style.opacity = "0";
    setTimeout(() => {
      edit.style.height = `${edit.scrollHeight}px`;
    }, 500);
  }

  closeEdit(id) {
    const info = document.getElementById(id);
    const edit = document.querySelector(`#edit${id}`);
    if (edit.style.height === "0px") {
      return;
    }
    edit.style.height = "0px";
    setTimeout(() => {
      info.style.height = `${info.scrollHeight}px`;
      info.style.padding = "10px";
      info.style.opacity = "1";
    }, 500);
  }

  render() {
    return (
      <div>
        <h1>Hello</h1>
        <h3>This is the home page</h3>
        <div className="actions">
          <button
            onClick={(e) => {
              this.refresh();
            }}>
            Update
          </button>
          <button
            id="add-category"
            style={{ margin: "0 10px" }}
            onClick={() => this.openAddProduct()}>
            Add Product
          </button>
        </div>
        <div className="container">
          <div
            style={{
              overflow: "hidden",
              transition: "all 0.4s ease",
              opacity: "1",
            }}>
            {this.state.products.map((item) => (
              <div
                className="row"
                key={item.id}
                style={{ flexDirection: "column", height: "auto" }}>
                <div
                  style={{ display: "flex", cursor: "pointer" }}
                  onClick={(e) => {
                    const info = document.getElementById(item.id);
                    const edit = document.querySelector(`#edit${item.id}`);
                    const controls = document.querySelector(`#a${item.id}`);
                    ProductFetch.getDetail(item.id).then((data) => {
                      this.setState((prevState) => {
                        let children = Object.assign({}, prevState.children);
                        children[item.id] = data;
                        return { children };
                      });
                      if (
                        info.style.height === "0px" &&
                        edit.style.height === "0px"
                      ) {
                        info.style.height = `${info.scrollHeight}px`;
                        info.style.padding = "10px";
                        info.style.opacity = "1";
                        controls.style.transform = "scale(1)";
                        controls.style.opacity = "1";
                      } else {
                        info.style.height = "0px";
                        info.style.padding = "0px 10px";
                        edit.style.height = "0px";
                        edit.style.padding = "0px";
                        controls.style.transform = "scale(0)";
                        controls.style.opacity = "0";
                      }
                    });
                  }}>
                  <p className="cell title-label">{item.name}</p>
                  <p className="cell" style={{ flexBasis: "100%" }}>
                    {item.id}
                  </p>
                  <div className="item-controls" id={"a" + item.id}>
                    <div
                      onClick={(e) => {
                        e.stopPropagation();
                        console.log("delete");
                        ProductFetch.delete(item.id).then((res) => {
                          this.refresh();
                        });
                      }}>
                      <TrashIcon size="20" color="white" />
                    </div>
                    <div
                      onClick={(e) => {
                        e.stopPropagation();
                        this.openEdit(item.id);
                      }}>
                      <EditIcon size="20" color="white" />
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    height: "auto",
                  }}>
                  <div
                    id={item.id}
                    style={{
                      padding: "0px",
                      height: "0px",
                      overflow: "hidden",
                      transition: "all 0.4s ease",
                    }}>
                    <p>Products:</p>
                    <div
                      style={{
                        padding: "5px 10px",
                        border: "1px solid black",
                        borderRadius: "5px",
                      }}>
                      {this.state.children[item.id]?.map((product) => (
                        <div key={product.id}>
                          <div style={{ display: "flex" }}>
                            <p>Name: {product.name}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div
                    style={{ height: "0px", transition: "all 0.5s" }}
                    id={"edit" + item.id}>
                    <div style={{ display: "flex" }}>
                      <p className="cell title-label input-label">Name</p>
                      <button
                        onClick={(e) => {
                          this.closeEdit(item.id);
                        }}>
                        Cancel
                      </button>
                      <button>Cancel</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          className="container"
          style={{
            display: "flex",
            padding: "0px",
            borderRadius: "10px",
            height: "0px",
            overflow: "hidden",
            opacity: "0",
            transition:
              "padding 0.4s ease, height 0.4s ease, opacity 0.2s ease",
          }}>
          <div style={{ display: "flex", gap: "10px" }}>
            <p className="cell title-label input-label">Name</p>
            <input type="text" name="name" className="name-text" />
            <input
              type="text"
              name="description"
              className="description-text"
            />
            <input type="number" name="price" className="price-text" />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              padding: "5px 10px",
            }}>
            <button
              style={{ margin: "0px 10px" }}
              onClick={() => {
                this.closeAddProduct();
              }}>
              Cancel
            </button>
            <button
              onClick={() => {
                ProductFetch.post({
                  name: document.querySelector(".name-text").value,
                });
                this.closeAddProduct();
              }}>
              Add
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductPage;
