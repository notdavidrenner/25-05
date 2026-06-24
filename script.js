setTimeout(() => {
    document.getElementById("line2").classList.remove("hidden");
}, 2000);

setTimeout(() => {
    document.getElementById("line3").classList.remove("hidden");
}, 4000);

setTimeout(() => {
    document.getElementById("buttons").classList.remove("hidden");
}, 6000);

function noClicked() {

    alert("you're going to have to rethink that");

    location.reload();
}

function yesClicked() {

    document.getElementById("content").innerHTML = `
        <p class="line">Good to know!</p>

        <p class="line hidden" id="intro">
            Here are some things I really like about you at the minute
        </p>

        <p class="line hidden" id="point1">
            1. Don't think I have seen a more beautiful smile
        </p>

        <p class="line hidden" id="point2">
            2. I admire how you always make time for your friends
        </p>

        <p class="line hidden" id="point3">
            3. That magnetic charm that had me up till sunrise
        </p>

        <button class="hidden" id="nextButton" onclick="pageThree()">
            NEXT
        </button>
    `;

    setTimeout(() => {
        document.getElementById("intro")
            .classList.remove("hidden");
    }, 2000);

    setTimeout(() => {
        document.getElementById("point1")
            .classList.remove("hidden");
    }, 4000);

    setTimeout(() => {
        document.getElementById("point2")
            .classList.remove("hidden");
    }, 6000);

    setTimeout(() => {
        document.getElementById("point3")
            .classList.remove("hidden");
    }, 8000);

    setTimeout(() => {
        document.getElementById("nextButton")
            .classList.remove("hidden");
    }, 10000);
}

function pageThree() {

    document.getElementById("content").innerHTML = `
        <p class="line">
        Some things aren't so great though....
        </p>

        <p class="line" id="con1">
        1. Allegedly seeing your name pop up on my phone makes me smile a bit too much...
        </p>

        <p class="line hidden" id="con2">
        2. That's it really :/
        </p>

        <button class="hidden" id="nextButton" onclick="finalPage()">
            NEXT
        </button>
    `;

    setTimeout(() => {

        document.getElementById("con2")
            .classList.remove("hidden");

        document.getElementById("nextButton")
            .classList.remove("hidden");

    }, 2500);
}

function finalPage() {

    document.getElementById("content").innerHTML = `
        <p class="line">
        Anyway just made this to let you know I'm having fun so far
        and I'm excited that there's probably still a lot to learn!
        </p>

        <p class="line">
        Here are some virtual flowers and a song
        </p>

        <h1>🌸 🌸 🌸 🌸 🌸</h1>
    `;

    startFlowers();

    document.getElementById("song").play();
}

function startFlowers() {

    setInterval(() => {

        const flower = document.createElement("div");

        flower.innerHTML = "🌸";

        flower.style.position = "absolute";

        flower.style.left =
            Math.random() * window.innerWidth + "px";

        flower.style.top = "-50px";

        flower.style.fontSize =
            (20 + Math.random() * 30) + "px";

        flower.style.opacity = 0.8;

        flower.style.transition = "8s linear";

        document
            .getElementById("flower-container")
            .appendChild(flower);

        setTimeout(() => {
            flower.style.transform =
                "translateY(110vh)";
        }, 10);

        setTimeout(() => {
            flower.remove();
        }, 8000);

    }, 300);
}