updated for pull Request
document.addEventListener("DOMContentLoaded", function () {
    const ListItems = document.querySelectorAll("todo-list li");
    ListItems.forEach(function (item) {
        item.addEventListener("click", function () {
        item.classList.toggle("completed");
      });
    });
 });