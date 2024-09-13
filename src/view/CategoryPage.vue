<template>
  <div>
    <div class="mainNav">
      <div class="navLeft">
        <h1 class="mx-2">Categories</h1>
        <p class="mx-2 mt-2">Home <i class="fa-solid fa-angle-right"></i></p>
        <p class="mx-2 mt-2 text-primary">Categories</p>
      </div>
      <div class="navRightSide">
        <div class="navRight mx-1">
          <div class="gear" id="grar1">
            <i class="fa-solid fa-rotate"></i>
          </div>
        </div>
        <div class="navRight mx-1">
          <div class="gear">
            <i class="fa-solid fa-plus"></i>
          </div>
        </div>
        <div class="navRight mx-1">
          <div class="gear" id="grar3">
            <i class="fa-solid fa-trash-can"></i>
          </div>
        </div>
      </div>
    </div>

    <div class="category_tabe">
      <div class="dashboard_bottom_left_calender">
        <h3 id="category_list">
          <i class="fa-solid fa-list"></i> Category List
        </h3>
      </div>

      <div class="categoryTable">
        <table>
          <tr>
            <th class="checkboxSection">
              <!-- Master checkbox to control all others -->
              <input type="checkbox" @change="toggleCheckbox" />
            </th>
            <th>Category Name</th>
            <th>Sort Order</th>
            <th class="m-5">Action</th>
          </tr>
          <tr v-for="(category, index) in categories" :key="index">
            <td>
              <!-- Individual checkboxes -->
              <input type="checkbox" v-model="category.checked" />
            </td>
            <td>
              {{ category.name }} <br /><small>
                <a href="#">{{ category.status }} </a>
              </small>
            </td>
            <td>{{ category.sortOrder }}</td>
            <td class="d-flex justify-content-center">
              <div class="dashboard_action_button" id="category_action_button">
                <i class="fa-solid fa-pen"></i>
              </div>
            </td>
          </tr>
        </table>
        <div class="category_bottom mt-3">
          <div class="category_bottom_left">
            <ul>
              <li class="mx-2"><a href="#">1</a></li>
              <li class="mx-2"><a href="#">2</a></li>
              <li class="mx-2"><a href="#">3</a></li>
              <li class="mx-2"><a href="#">4</a></li>
              <li class="mx-2">
                <a href="#"><i class="fa-solid fa-arrow-right"></i></a>
              </li>
            </ul>
          </div>
          <div class="category_bottom_right">
            <p>Showing 1 to 10 of 38 (4 Pages)</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    // Define categories with a checkbox status
    const categories = ref([
      { name: "Joha", status: "Enabled", sortOrder: 98, checked: false },
      { name: "Basmati", status: "Enabled", sortOrder: 80, checked: false },
      { name: "Sona", status: "Enabled", sortOrder: 70, checked: false },
      { name: "Joha", status: "Enabled", sortOrder: 98, checked: false },
      { name: "Basmati", status: "Enabled", sortOrder: 80, checked: false },
      { name: "Sona", status: "Enabled", sortOrder: 70, checked: false },
      { name: "Joha", status: "Enabled", sortOrder: 98, checked: false },
      { name: "Basmati", status: "Enabled", sortOrder: 80, checked: false },
      { name: "Sona", status: "Enabled", sortOrder: 70, checked: false },
    ]);

    // Method to toggle all checkboxes
    const toggleCheckbox = (event) => {
      const checkedStatus = event.target.checked;
      categories.value.forEach((category) => {
        category.checked = checkedStatus;
      });
    };

    return { categories, toggleCheckbox };
  },
};
</script>

<style>
.navRightSide {
  display: flex;
}
#grar1 {
  background-color: #f3a638 !important;
}
#grar3 {
  background-color: #e3503e !important;
}
#grar1:hover {
  background-color: #dd8d1d !important;
}
#grar3:hover {
  background-color: #c93623 !important;
}
.category_tabe {
  width: 100%;
}
.category_tabe table {
  width: 100%;
  padding: 10px;
  text-align: center;
  border-collapse: collapse;
  padding: 20px;
  background-color: #fff;
  border-radius: 6px;
}
#category_list {
  font-size: 14px !important;
}
.categoryTable {
  padding: 16px;
  border-left: 1px solid rgba(0, 0, 0, 0.175);
  border-right: 1px solid rgba(0, 0, 0, 0.175);
  border-bottom: 1px solid rgba(0, 0, 0, 0.175);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
}
.category_tabe table tr th {
  border: 1px solid rgba(0, 0, 0, 0.175);
  padding: 10px;
  font-size: 14px;
}
.category_tabe table tr td {
  border: 1px solid rgba(0, 0, 0, 0.175);
  padding: 10px;
  font-size: 14px;
}
#category_action_button {
  height: 40px;
  width: 40px;
  cursor: pointer;
}
#category_action_button:hover {
  background-color: #2caccf;
}
small a {
  text-decoration: none;
  color: green;
}
.checkboxSection {
  width: 40px !important;
}
tr:hover {
  background-color: #f6f6f6 !important;
}

table tr:first-child:hover {
  background-color: #fff;
}
.category_bottom_left ul {
  list-style-type: none;
  padding: 0;
  overflow: hidden;
  display: flex;
}
.category_bottom_left ul li {
  height: 30px;
  width: 30px;
  border: 1px solid rgba(0, 0, 0, 0.175);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
}
.category_bottom_left ul li a {
  display: inline-block;
  padding: 10px 12px;
  text-decoration: none;
  color: #2caccf;
}
.category_bottom_left ul li:hover {
  background-color: #05b2e2;
}
.category_bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.category_bottom_right p {
  font-size: 14px;
}
</style>
