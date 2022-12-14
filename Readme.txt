End points

POST: localhost:3000/postAluno
    Body:
        {
            "nome": "Nome do aluno",
            "matricula": "Número da matrícula",
            "serie": 00
        }

GET: localhost:3000/getAllAlunos
    (Sem body)

GET: localhost:3000/getAlunoById
    Body:
        {
            "id":"XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX"
        }

PUT: localhost:3000/putAluno
    Body:
        {
            "id":"XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX",
            "nome": "Novo nome do aluno",
            "matricula": "Nova matricula do aluno",
            "serie": 00
        }

DELETE: localhost:3000/deleteAluno
    Body:
        {
            "id":"XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX"
        }