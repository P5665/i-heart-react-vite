<h1>i-heart-react-vite</h1>

<h2>Purpose</h2>
<ul>
    <li>Use of Vite pronounced 'veet' as my tooling this go around.</li>
    <li>Use of Node</li>
    <li>Show use of later versions of JS - Arrow Functions, Implicit returns, .map(), destructuring arrays and objects</li>
    <li>Basic React features - JSX, props, components</li>
</ul>

<h2>Setup</h2>

<ol>
    <li>
        Using instructions from tailwind <a href="https://tailwindcss.com/docs/guides/vite" target="_blank"></a>
        <code>npm create vite@latest i-heart-react -- --template react</code>
    </li>
    <li>
        <code>cd i-heart-react</code>
    </li>
    <li>
        <code>npm install -D tailwindcss postcss autoprefixer</code>
    </li>
    <li>
        <code>npx tailwindcss init -p</code>
    </li>
    <li>
        tailwind.config.js add following above "theme":<br>
        <code>
            content: [
                "./index.html",
                "./src/**/*.{js,ts,jsx,tsx}",
            ],
        </code>
    </li>
    <li>
        index.css add following <br>
        <code>
            @tailwind base;
            @tailwind components;
            @tailwind utilities;
        </code>
    </li>
    <li>
        <code>npm run dev</code>
    </li>

</ol>

<h2>Components</h2>
<ul>
    <li>Standalone
        <ul>
            <li>Header - basic site header</li>
        </ul>
    </li>
    <li>
        Layered Components
        <ul>
            <li>HeartSVG - svg img component</li>
            <li>Heart|CandyColoredHeart - Pick your flavor red or pastel</li>
            <li>HeartLists - Saying on hearts</li>
        </ul>
    </li>    
</ul>
