package com.mycompany.cufe.infrastructure;

public record CufeRequest(
    String numFac,
    String fecFac,
    String horFac,
    String valFac,
    String codImp1,
    String valImp1,
    String codImp2,
    String valImp2,
    String codImp3,
    String valImp3,
    String valTot,
    String nitFE,
    String numAdq,
    String ciTec,
    String tipoAmbiente
) { }
