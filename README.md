# PRACTICA GITHUB ACTIONS
En este README incluyo la documentacion de la practica de Github Actions.

## RESULTADO DE LOS ÚLTIMOS TESTS
<!---Start place for the badge -->
![Success](https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg)

<!---End place for the badge -->

## Documentacion de la practica

### LinterJob
En este job ejecutamos los comandos npm install y npm run lint.<br>
![job1](https://user-images.githubusercontent.com/31510870/146691868-cb3332ef-3ea3-40dc-bbfa-dbc46f3e9319.png)

### CypressJob
En este job ejecutamos los tests de cypress guardando el resultado en una archivo llamado result.txt<br>
![job2](https://user-images.githubusercontent.com/31510870/146691904-f46cd9d8-db92-45e7-9d5d-49f323d7ec03.png)

La primera vez que lo ejecutamos devuelve un error en un archivo porque pone POST0. Lo cambiamos por POST y ya funciona perfectamente.<br>
![errorCypress](https://user-images.githubusercontent.com/31510870/146692222-67c2cfed-da72-497f-98f7-b7914dce2269.png)

### AddBadgeJob
En este job cogemos el contenido de result.txt y se lo pasamos a nuestra action change_readme en la cual dependiendo del resultado muestra un badge u otro.<br>
![job3](https://user-images.githubusercontent.com/31510870/146692050-76cfdd71-43a9-403a-bbb0-3b4063e4ac5e.png)

Codigo de la action<br>
![code_change_readme](https://user-images.githubusercontent.com/31510870/146692104-c8074e58-2563-45ce-b8cb-bf68d24d75c1.png)
![code_change_readme_yml](https://user-images.githubusercontent.com/31510870/146692106-63b82eea-57a2-44dc-a661-6b10a119e2c8.png)

### DeployJob
En este job el objetivo es hacer el deploy con vercel, para lo cual necesitamos crearnos una cuenta en vercel y linkearla.<br>
![job4](https://user-images.githubusercontent.com/31510870/146692039-3ed1ff64-5fe0-480c-ac3c-c5b5137a016d.png)

Con este comando linkeamos nuestra cuenta<br>
![vercel_link](https://user-images.githubusercontent.com/31510870/146692054-df2440be-ad76-47a5-add5-3cd4cad7d464.png)

En esta captura podemos ver todos los deploys correctos que se han hecho.<br>
![deployments_vercel](https://user-images.githubusercontent.com/31510870/146692072-415d3860-f099-42b3-a283-69dc4135fd51.png)

### NotificationJob
En este job recogemos el resultado de todos los jobs y enviamos un correo usando SMTP con la libreria nodemailer.<br>
![job5](https://user-images.githubusercontent.com/31510870/146692125-c4152389-e61d-481b-a442-435ee6461ed6.png)

Codigo de la action<br>
![code_send_email](https://user-images.githubusercontent.com/31510870/146692137-75835aa9-7a7b-4e69-ba40-668b5bc4ec08.png)
![code_send_email_yml](https://user-images.githubusercontent.com/31510870/146692155-052cddc6-cdb6-4f84-82c6-a6b3d6e121b4.png)

En esta captura podemos observar un correo recibido<br>
![email_recived](https://user-images.githubusercontent.com/31510870/146692169-5f00fd35-c68b-4484-a7a8-14a3244918f6.png)

## JobCompletado
Adjunto una captura de una ejecucion del workflow completada.
![jobcomplete](https://user-images.githubusercontent.com/31510870/146692259-8ca219b0-48b6-449d-bb4e-65731b8eff67.png)

<b>Autor: Juan Antonio López Seguí</b>
