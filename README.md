<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>我的GitHub Pages</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }
        .container {
            width: 80%;
            margin: auto;
            overflow: hidden;
        }
        header {
            background: #50b3a2;
            color: white;
            padding-top: 30px;
            min-height: 70px;
            border-bottom: #e8491d 3px solid;
        }
        header a {
            color: #ffffff;
            text-decoration: none;
            text-transform: uppercase;
            font-size: 16px;
        }
        header ul {
            padding: 0;
            list-style: none;
        }
        header li {
            float: left;
            display: inline;
            padding: 0 20px 0 20px;
        }
        header #branding {
            float: left;
        }
        header #branding h1 {
            margin: 0;
        }
        header nav {
            float: right;
            margin-top: 10px;
        }
        header .highlight, header .current a {
            color: #e8491d;
            font-weight: bold;
        }
        header a:hover {
            color: #ffffff;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <header>
        <div class="container">
            <div id="branding">
                <h1>我的GitHub Pages</h1>
            </div>
            <nav>
                <ul>
                    <li class="current"><a href="index.html">首页</a></li>
                    <li><a href="about.html">关于</a></li>
                    <li><a href="contact.html">联系</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <div class="container">
        <section id="main">
            <h1>欢迎来到我的GitHub Pages</h1>
            <p>这是一个简单的GitHub Pages页面示例，你可以在这里添加你的内容和项目。</p>
        </section>
    </div>

    <footer>
        <p>版权所有 &copy; 2023 我的GitHub Pages</p>
    </footer>
</body>
</html>
