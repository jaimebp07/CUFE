package com.mycompany.cufe.infrastructure.adapter.input.rest;

import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mycompany.cufe.application.services.CufeGeneratorService;
import com.mycompany.cufe.domain.models.CufeData;
import com.mycompany.cufe.infrastructure.CufeRequest;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/cufe")
public class CufeController {
 private final CufeGeneratorService cufeService;

    public CufeController(CufeGeneratorService cufeService) {
        this.cufeService = cufeService;
    }

    @PostMapping
    public ResponseEntity<Map<String, String>> generateCufe(@RequestBody CufeRequest request) {
        CufeData data = new CufeData(
            request.numFac(),
            request.fecFac(),
            request.horFac(),
            request.valFac(),
            request.codImp1(),
            request.valImp1(),
            request.codImp2(),
            request.valImp2(),
            request.codImp3(),
            request.valImp3(),
            request.valTot(),
            request.nitFE(),
            request.numAdq(),
            request.ciTec(),
            request.tipoAmbiente()
        );
        String cufe = cufeService.generateCufe(data);
        return ResponseEntity.ok(Map.of("cufe", cufe));
    }
}
