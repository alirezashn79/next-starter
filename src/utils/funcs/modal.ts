export const closeModal = (selector: string) => {
    (document.getElementById(selector) as HTMLDialogElement).close();
};

export const showModal = (id: string) => {
    (document.getElementById(id) as HTMLDialogElement).showModal();
};

