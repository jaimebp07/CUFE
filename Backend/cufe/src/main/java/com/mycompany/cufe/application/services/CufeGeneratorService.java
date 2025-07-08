package com.mycompany.cufe.application.services;

import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

import org.springframework.stereotype.Service;

import com.mycompany.cufe.domain.models.CufeData;
import com.mycompany.cufe.domain.port.input.CufeUseCase;

@Service
public class CufeGeneratorService implements CufeUseCase {
    @Override
    public String generateCufe(CufeData data) {
        String concatenated = data.numFac()
                + data.fecFac()
                + data.horFac()
                + data.valFac()
                + data.codImp1()
                + data.valImp1()
                + data.codImp2()
                + data.valImp2()
                + data.codImp3()
                + data.valImp3()
                + data.valTot()
                + data.nitFE()
                + data.numAdq()
                + data.ciTec()
                + data.tipoAmbiente();

        try {
            MessageDigest md = MessageDigest.getInstance("SHA-384");
            byte[] hashBytes = md.digest(concatenated.getBytes(StandardCharsets.UTF_8));
            StringBuilder sb = new StringBuilder();
            for (byte b : hashBytes) {
                sb.append(String.format("%02x", b));
            }
            return sb.toString();

        } catch (NoSuchAlgorithmException e) {
            throw new RuntimeException("Error generating CUFE hash", e);
        }
    }
}
