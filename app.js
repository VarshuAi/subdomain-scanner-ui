
            const subs = ['admin', 'mail', 'api', 'dev', 'portal'];
            window.scanSubs = function() {
                const d = document.getElementById('sub-domain').value;
                const list = document.getElementById('sub-list');
                list.innerHTML = '';
                subs.forEach((sub, idx) => {
                    setTimeout(() => {
                        const li = document.createElement('li');
                        li.innerHTML = `<span>${sub}.${d}</span><strong style="color:#39ff14;">200 OK</strong>`;
                        list.appendChild(li);
                    }, idx * 400);
                });
            }
        