<!DOCTYPE html>
<html>
<head>
  <title>Landing Page</title>
  <script src="https://cdn.jsdelivr.net/npm/promise-polyfill@8/dist/polyfill.min.js"></script>
  <style>
    /* Add CSS for logo placement and padding */
    #logo {
      padding-top: 24px;
      display: block;
      margin: 0 auto;
    }
  </style>
</head>
<body>
  <img id="logo" src="your-logo-file-path.jpg" alt="Company Logo">
  <br>
  <div>
    <form>
      <label for="product-desc">Product Description:</label>
      <input type="text" id="product-desc" name="product-desc">
      <br><br>
      <button type="button" onclick="submitForm()">Submit</button>
    </form>
  </div>
  <br>
  <div id="result"></div>

  <script>
    function submitForm() {
      // Get the product description from the input field
      const productDesc = document.getElementById("product-desc").value;

      // Submit the product description to the Java backend application
      fetch("/your-java-backend-endpoint", {
        method: "POST",
        body: JSON.stringify({ productDesc: productDesc }),
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(response => response.json())
        .then(data => {
          // Display the results in the "result" div
          document.getElementById("result").innerHTML = data.result;
        })
        .catch(error => {
          console.error("Error:", error);
        });
    }
  </script>
</body>
</html>