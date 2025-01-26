<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>AJAX Demo</title>
  <!-- Bootstrap CSS -->
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
    rel="stylesheet" />
  <!-- Tailwind CSS -->
  <link
    href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
    rel="stylesheet" />
  <script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
  <!-- Custom CSS -->
  <link rel="stylesheet" href="style.css">
</head>

<body>
  <!-- Animated Background -->
  <div class="animated-background"></div>

  <!-- Main Content -->
  <div class="container text-center">
    <!-- Result Section -->
    <div
      id="result"
      class="glass p-8 rounded-lg shadow-lg mb-6 text-white text-lg max-w-md mx-auto">
      <p>Welcome! Click the button to see the magic!</p> <!-- Default content -->
    </div>

    <!-- Button Section -->
    <div class="btn">
      <button
        type="button"
        onclick="displayFullName()"
        class="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all">
        Show Full Name
      </button>
    </div>
  </div>

  <script>
    function displayFullName() {
      const request = new XMLHttpRequest();
      request.open("GET", "ajax.php?fname=Nishan&lname=Pradhan");
      // Event listener for readystatechange event
      request.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
          const resultDiv = document.getElementById("result");
          resultDiv.innerHTML = this.responseText;
          resultDiv.classList.add("show"); // Add animation class
        }
      };
      request.send();
    }
  </script>
</body>

</html>