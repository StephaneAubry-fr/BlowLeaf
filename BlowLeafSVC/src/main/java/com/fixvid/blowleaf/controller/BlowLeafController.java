package com.fixvid.blowleaf.controller;

import com.fixvid.blowleaf.entity.Garden;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://10.0.2.20:4200")
public class BlowLeafController {


    @GetMapping("/blow")
    public String ping() {
        return "Java BlowLeafController";
    }

    @PostMapping("/blow/right")
    public Garden blowRight(@RequestBody Garden garden) {
        garden.blowRight();
        return garden;
    }

    @PostMapping("/blow/left")
    public Garden blowLeft(@RequestBody Garden garden) {
        garden.blowLeft();
        return garden;
    }

    @PostMapping("/blow/up")
    public Garden blowUp(@RequestBody Garden garden) {
        garden.blowUp();
        return garden;
    }

    @PostMapping("/blow/down")
    public Garden blowDown(@RequestBody Garden garden) {
        garden.blowDown();
        return garden;
    }

}
