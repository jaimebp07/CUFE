### PASOS PARA EJECUTAR BACKEND
1. Contar con Java 21 intalado en el equipo
2. Abrir el directorio Backeend/cufe
3. Ejecutar el siguiente comando
```sh
./mvnw spring-boot:run
```
4. Se puede probar con el siguiente cURL
```sh
curl --location 'http://localhost:8080/api/cufe' \
--header 'Content-Type: application/json' \
--data '{
  "numFac": "FE12345",
  "fecFac": "2025-07-03",
  "horFac": "10:45:00-05:00",
  "valFac": "1000.00",
  "codImp1": "01",
  "valImp1": "190.00",
  "codImp2": "04",
  "valImp2": "0.00",
  "codImp3": "03",
  "valImp3": "0.00",
  "valTot": "1190.00",
  "nitFE": "900123456",
  "numAdq": "123456789",
  "ciTec": "ABC1234567890DEF",
  "tipoAmbiente": "2"
}
'
```

### PASOS PARA EJECUTAR FROTEND
1. Abrir la carpeta Frontend\cufe-app
2. Contar con v20.19.0
3. Ejecutar el comando para instalar dependencias
```sh
npm install
```
4. Ejecutar el siguiente comando para ejecutar la aplicacion
```sh
ng serve
```
5. acceder al puerto `http://localhost:4200/`
6. Una vez se este ejecutando la aplicacion se pueden utilizar los siguientes datos para llenar el formuario:

| Campo          | Valor                |
|----------------|----------------------|
| `ciTec`        | `ABC1234567890DEF`   |
| `fecFac`       | `2025-07-03`         |
| `horFac`       | `10:45:00-05:00`     |
| `nitFE`        | `900123456`          |
| `numAdq`       | `123456789`          |
| `numFac`       | `FE12345`            |
| `tipoAmbiente` | `2`                  |
| `valFac`       | `1000.00`            |
| `valTot`       | `1190.00`            |
| `valImp1`      | `190.00`             |
| `valImp2`      | `0.00`               |
| `valImp3`      | `0.00`               |