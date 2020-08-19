export const signUp = user => (
    $.ajax({
        url: 'api/users',
        method: 'POST',
        data: { user }
    })
);

export const signIn = user => (
    $.ajax({
        url: 'api/sessions',
        method: 'POST',
        data: { user }
    })
);

export const signOut = () => (
    $.ajax({
        url: 'api/sessions',
        method: 'DELETE',
    })
);
