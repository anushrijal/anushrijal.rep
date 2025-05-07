:root {
    --primary-color: #0ff;
    --secondary-color: #f0f;
    --background-color: #050505;
    --text-color: #fff;
    --font-family: 'Roboto', sans-serif;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background: var(--background-color);
    color: var(--text-color);
    font-family: var(--font-family);
}

.container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
}

.hero {
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    text-align: center;
    padding: 100px 20px;
}

.hero-title {
    font-size: 3rem;
    color: var(--text-color);
    margin-bottom: 20px;
    text-shadow: 0 0 10px var(--primary-color);
}

.hero-subtitle {
    font-size: 1.5rem;
    margin-bottom: 30px;
}

.btn-primary {
    padding: 10px 20px;
    background: var(--text-color);
    color: var(--background-color);
    text-transform: uppercase;
    border-radius: 5px;
    text-decoration: none;
    font-weight: bold;
    transition: all 0.3s ease-in-out;
}

.btn-primary:hover {
    transform: scale(1.1);
    box-shadow: 0 0 15px var(--secondary-color);
}

.features {
    padding: 60px 20px;
    text-align: center;
}

.section-title {
    font-size: 2.5rem;
    color: var(--primary-color);
    margin-bottom: 40px;
}

.feature-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
}

.feature-item {
    background: rgba(255, 255, 255, 0.1);
    padding: 20px;
    border-radius: 10px;
    transition: transform 0.3s, box-shadow 0.3s;
}

.feature-item:hover {
    transform: scale(1.05);
    box-shadow: 0 0 15px var(--primary-color);
}

.icon {
    font-size: 2.5rem;
    color: var(--secondary-color);
    margin-bottom: 15px;
}

.footer {
    background: #000;
    text-align: center;
    padding: 20px 0;
    color: rgba(255, 255, 255, 0.7);
}
