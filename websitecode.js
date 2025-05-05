<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple JavaScript Website</title>
</head>
<body>
    <h1>Welcome to My Website</h1>
    <button onclick="showMessage()">Click Me</button>
    <p id="message"></p>

    <script>
        function showMessage() {
            document.getElementById("message").innerText = "Hello, thanks for visiting!";
        }
    </script>
</body>
</html>