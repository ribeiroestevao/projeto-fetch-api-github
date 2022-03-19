const screen = {
    userProfile: document.querySelector('.profile-data'),

    renderUser(user) {
        this.userProfile.innerHTML = `<div class="info">
                                            <img src="${user.avatarUrl}" alt="Foto do perfil do usuário" />
                                            <div class="data">
                                                <h1>${user.name ?? 'Nao possui nome cadastrado 😥'}</h1>
                                                <p>${user.bio ?? 'Nao possui bio cadastrada 😥'}</p>
                                            </div>
                                            <div class="info-follow">
                                                <div>
                                                    <h2>👥Seguidores</h2>
                                                    <span class="followers">${user.followers}</span>
                                                </div>
                                                <div>
                                                    <h2>👥Seguindo</h2>
                                                    <span class="following">${user.following}</span>
                                                </div>
                                            </div>
                                        </div>`


        let repositoriesItens = ''
        user.repositories.forEach(repo => repositoriesItens += `<li>
                                                                    <a href="${repo.html_url}" target="_blank">
                                                                        <div class="repo-name">${repo.name}</div>
                                                                        <div class="repo-info">🍴${repo.forks_count}</div><div class="repo-info">⭐${repo.stargazers_count}</div><div class="repo-info">👀${repo.watchers_count}</div><div class="repo-info">🧑‍💻${repo.language ?? 'Sem linguagem'}</div>
                                                                    </a>
                                                                </li>`)

        if(user.repositories.length > 0) {
            this.userProfile.innerHTML += `<div class="repositories section">
                                            <h2>Repositórios</h2>
                                            <ul>${repositoriesItens}</ul>
                                           </div>`
        }

        let activitiesItens = "";
        user.activity.forEach(            
            (activity) =>
                (activitiesItens += `<li>              
                                        <div class="list-activity">                        
                                            <p><span>${activity.repo.url}:</span> ${activity.type}</p>
                                        </div>
                                    </li>
                `)                
        );

        if (user.activity.length > 0) {
            this.userProfile.innerHTML += `
                                            <div class="activity section"> 
                                                <h2>Atividades</h2>
                                                <ul>${activitiesItens}</ul>
                                            </div>
                                        `;
        }


    },
    renderNotFound() {
        this.userProfile.innerHTML = "<h3>Usuário não encontrado</h3>"
    }
}

export { screen }