function pad(n, width, z) {
    z = z || '0';
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

const decimal = {
    hours1: document.querySelector(".hours1 .decimal"),
    hours2: document.querySelector(".hours2 .decimal"),
    minutes1: document.querySelector(".minutes1 .decimal"),
    minutes2: document.querySelector(".minutes2 .decimal"),
    seconds1: document.querySelector(".seconds1 .decimal"),
    seconds2: document.querySelector(".seconds2 .decimal"),
}

const binary = {
    hours1: document.querySelector(".hours1 .binary"),
    hours2: document.querySelector(".hours2 .binary"),
    minutes1: document.querySelector(".minutes1 .binary"),
    minutes2: document.querySelector(".minutes2 .binary"),
    seconds1: document.querySelector(".seconds1 .binary"),
    seconds2: document.querySelector(".seconds2 .binary"),
}

function render() {

    document.querySelectorAll(".active").forEach((block) => {
        block.classList.remove("active");
    })

    const activateBlocks = (bin, selector) => {
        bin.split("").forEach((bit, index) => {
            if (bit == 1) {
                var element = document.querySelectorAll(selector)[index];
                if (!element.classList.contains('active')) {
                    element.classList.add("active")
                };
            }
        })
    }

    let currentTime = new Date();

    let hours = pad(currentTime.getHours(), 2).toString();
    let minutes = pad(currentTime.getMinutes(), 2).toString();
    let seconds = pad(currentTime.getSeconds(), 2).toString();

    decimal.hours1.textContent = hours[0];
    decimal.hours2.textContent = hours[1];

    let binHours1 = pad(Number(hours[0]).toString(2), 4);
    let binHours2 = pad(Number(hours[1]).toString(2), 4);
    binary.hours1.textContent = binHours1;
    binary.hours2.textContent = binHours2;

    activateBlocks(binHours1, ".hours1 .block");
    activateBlocks(binHours2, ".hours2 .block");

    let binMinutes1 = pad(Number(minutes[0]).toString(2), 4);
    let binMinutes2 = pad(Number(minutes[1]).toString(2), 4);
    decimal.minutes1.textContent = minutes[0];
    decimal.minutes2.textContent = minutes[1];

    binary.minutes1.textContent = pad(Number(minutes[0]).toString(2), 4);
    binary.minutes2.textContent = pad(Number(minutes[1]).toString(2), 4);

    activateBlocks(binMinutes1, ".minutes1 .block");
    activateBlocks(binMinutes2, ".minutes2 .block");

    let binSeconds1 = pad(Number(seconds[0]).toString(2), 4);
    let binSeconds2 = pad(Number(seconds[1]).toString(2), 4);

    decimal.seconds1.textContent = seconds[0]
    decimal.seconds2.textContent = seconds[1];

    binary.seconds1.textContent = binSeconds1;
    binary.seconds2.textContent = binSeconds2;

    activateBlocks(binSeconds1, ".seconds1 .block");
    activateBlocks(binSeconds2, ".seconds2 .block");

    window.requestAnimationFrame(render);
}

window.requestAnimationFrame(render);
