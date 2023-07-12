<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Nuevo Beneficio Registrado</title>
    <style>
        th,
        td {
            text-align: left;
            border: 1px solid lightcyan;
        }
    </style>
</head>

<body>

    <div style="text-align: center;">

        <table style="width: 600px;">
            <thead>
                <tr>
                    <th colspan="4">Nuevo Beneficio Registrado</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>Colaborador</th>
                    <td colspan="3">{{ $user->user->name }}</td>
                </tr>
                <tr>
                    <th>Beneficio</th>
                    <td colspan="3">{{ $user->benefits->name }}</td>
                </tr>
                <tr>
                    <th>Detalle</th>
                    <td colspan="3">{{ $user->benefit_detail->name }}</td>
                </tr>
                <tr>
                    <th style="width: 20%;">Inicio</th>
                    <td style="width: 40%;">{{ $user->benefit_begin_time }}</td>
                    <th style="width: 20%;">Fin</th>
                    <td style="width: 40%;">{{ $user->benefit_end_time }}</td>
                </tr>
            </tbody>
        </table>

    </div>

</body>

</html>
