export const copyToClipboard = async (text: string) => {
    if (!navigator.clipboard) {
        throw new Error("Clipboard API not available");
    }
    await navigator.clipboard.writeText(text);
};