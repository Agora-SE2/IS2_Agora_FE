export function postLawProject(lawProject) {
    return fetch(process.env.REACT_APP_BACK_URL + "law_projects.json", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(lawProject)
    });

    // TODO: POST to law_project_tag
}