var names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"]
function whoPays(names) {
        return names[Math.floor((Math.random(4) * names.length))]
}

whoPays(names);