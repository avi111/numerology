const existingUsernames = ["ealush", "user_1"];

export const doesUserExist = (firstName: string) => {
    return new Promise<void>((resolve, reject) => {
        setTimeout(() => {
            existingUsernames.includes(`${firstName}`.toLowerCase())
                ? reject()
                : resolve();
        }, 2000);
    });
};
