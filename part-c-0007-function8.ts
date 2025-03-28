enum ProjectLanguages {

    "Python" = "Python",
    "Vyper" = "Vyper",
    "Kotlin" = "Kotlin",
    "TypeScript" = "TypeScript",
    "Rust" = "Rust"
}

function projectLang(projectID: number, l: ProjectLanguages) {

    return `Project ID: ${projectID} - project language: ${l}`
}

let fintech_project_12_lang = projectLang(21, "Rust")

console.log(fintech_project_12_lang) // Project ID: 21 - project language: Rust
