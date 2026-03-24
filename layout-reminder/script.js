<script>
  const toggleBtn = document.getElementById("menuToggle");
  const sidebar = document.querySelector(".side-container");
  const container = document.querySelector(".container");

  toggleBtn.addEventListener("click", () => {
    sidebar.classList.toggle("closed");
    container.classList.toggle("full");
  });
</script>