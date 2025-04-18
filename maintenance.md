<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>Sst... Lagi Diperbaiki</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            background: linear-gradient(135deg, #1c1c1c, #3a3a3a);
            color: #f5f5f5;
            font-family: 'Courier New', Courier, monospace;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            overflow: hidden;
        }

        .container {
            text-align: center;
            max-width: 600px;
        }

        h1 {
            font-size: 2.5rem;
            margin-bottom: 0.5em;
        }

        p {
            font-size: 1.1rem;
            color: #ccc;
        }

        .gear {
            font-size: 4rem;
            animation: spin 2s linear infinite;
            margin-bottom: 1em;
        }

        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }

        .signature {
            margin-top: 3em;
            font-size: 0.9rem;
            color: #777;
        }

        .glow {
            color: #00ffe7;
            text-shadow: 0 0 10px #00ffe7, 0 0 20px #00ffe7;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="gear">⚙️</div>
        <h1 class="glow">Oops, Lagi Diservis Nih!</h1>
        <p>Maul dan tim sedang ngoprek sesuatu di balik layar.<br>Tunggu bentar ya, bentar lagi balik kinclong!</p>
        <div class="signature">— Dibangun penuh cinta oleh Maul 💻</div>
    </div>
</body>
</html>
