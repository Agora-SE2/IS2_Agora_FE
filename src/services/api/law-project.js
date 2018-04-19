export function postLawProject(formData) {
    return fetch(process.env.REACT_APP_BACK_URL + "law_projects.json", {
        method: 'POST',
        body: formData
    });

    // TODO: POST to law_project_tag
}