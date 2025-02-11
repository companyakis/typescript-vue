export class Blog {

    title: string
    content: string
    isEdited: boolean

    constructor(title: string, content: string) {
        this.title = title
        this.content = content
        this.isEdited = false
    }

    blogLength(): number {
        return this.content.length
    }

    preview(): string {
        return this.content.slice(0, 15).concat("...")
    }
}

let blog1 = new Blog("AI Age", "Is AI good? We don't know exactly. We'll see. Let's wait! See")

console.log(`Blog 1 length: ${blog1.blogLength()}`)

console.log(`Blog 1 preview: ${blog1.preview()}`)

// Blog 1 length: 61
// Blog 1 preview: Is AI good? We ...
