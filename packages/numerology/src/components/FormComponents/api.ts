const existingUsernames = ["ealush", "user_1"];

export const doesUserExist = (username: string) => {
    return new Promise<void>((resolve, reject) => {
        setTimeout(() => {
            existingUsernames.includes(`${username}`.toLowerCase())
                ? reject()
                : resolve();
        }, 2000);
    });
};
