const project = {
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            description: 'Bare trykk på generate knappen',
            options: {
                source: 'title',
            },
        },
        {
            name: "coverimage",
            title: "CoverImage",
            type: "image",
            options: {
                hotspot: true
            },
            fields: [
                {
                    name: "alt",
                    title: "Alt",
                    type: "string"
                }
            ]
        },
        {
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [{ type: "contentBlock"}]
        },
        {
            name: 'excerpt',
            title: 'Excerpt',
            type: 'string',
        },
        {
            name: 'progress',
            title: 'Progress',
            type: 'string',
        },
        {
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [{ type: "string"}]
        },
        {
            name: 'highlighted',
            title: 'Highlighted Project',
            type: 'boolean',
            description: 'Mark this project as a highlighted/featured project',
        },
    ]
}

export default project