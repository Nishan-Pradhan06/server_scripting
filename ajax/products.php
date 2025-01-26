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
    <!-- Custom CSS -->
    <link rel="stylesheet" href="./style.css">
    <style>
        /* Custom styles for the animated background */
        .animated-background {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
            background-size: 400% 400%;
            animation: gradientBG 15s ease infinite;
            z-index: -1;
        }

        @keyframes gradientBG {
            0% {
                background-position: 0% 50%;
            }

            50% {
                background-position: 100% 50%;
            }

            100% {
                background-position: 0% 50%;
            }
        }

        /* Glassmorphism effect */
        .glass {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border-radius: 10px;
            border: 1px solid rgba(255, 255, 255, 0.2);
        }

        /* Button styling */
        #showProductList {
            background: linear-gradient(45deg, #6a11cb, #2575fc);
            color: white;
            border: none;
            padding: 12px 24px;
            border-radius: 25px;
            font-size: 16px;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        #showProductList:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }

        /* Product list styling */
        #productsList {
            margin-top: 20px;
        }

        .product-item {
            background: rgba(255, 255, 255, 0.2);
            padding: 10px;
            margin-bottom: 10px;
            border-radius: 5px;
            transition: all 0.3s ease;
        }

        .product-item:hover {
            background: rgba(255, 255, 255, 0.3);
            transform: translateX(5px);
        }
    </style>
</head>

<body>
    <script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
    <div class="animated-background"></div>

    <!-- Main Content -->
    <div class="container text-center mt-10">
        <!-- Result Section -->
        <div
            id="result"
            class="glass p-8 rounded-lg shadow-lg mb-6 text-white text-lg max-w-md mx-auto">
            <h2 class="text-3xl font-bold mb-4">Product List</h2>
            <div id="productsList">
                <!-- Product items will be dynamically inserted here -->
            </div>
        </div>

        <button id="showProductList" class="mt-6">Load Products</button>

    </div>
    <script src="./products.js"></script>
</body>

</html>