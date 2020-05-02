
transform(toPSSpriteID, () => {
    dest("ani");
    sel(
        "src/canonical/models/front",
        "src/canonical/models/front-cosmetic",
        "src/canonical/models/front-misc",
        "src/cap/models/front",
        "src/cap/sprites/gen5/front"
    );
    
    dest("ani-back");
    sel(
        "src/canonical/models/back",
        "src/canonical/models/back-cosmetic",
        "src/canonical/models/back-misc",
        "src/cap/models/back",
        "src/cap/sprites/gen5/back"
    );
    
    dest("ani-shiny");
    sel(
        "src/canonical/models/front-shiny",
        "src/canonical/models/front-shiny-cosmetic",
        "src/cap/models/front-shiny",
    );
    
    dest("ani-back-shiny");
    sel(
        "src/canonical/models/back-shiny",
        "src/canonical/models/back-shiny-cosmetic",
        "src/cap/models/back-shiny",
    );

    dest("gen5ani");
    sel(
        "src/cap/sprites/gen5/front"
    );

    dest("gen5ani-back");
    sel(
        "src/cap/sprites/gen5/back"
    );
    
    dest("afd");
    sel(
        "src/afd/sprites/front",
        "src/afd/sprites/front-cosmetic",
    )

    dest("afd-shiny");
    sel(
        "src/afd/sprites/front-shiny",
        "src/afd/sprites/front-shiny-cosmetic",
    )

    dest("afd-back");
    sel(
        "src/afd/sprites/back",
        "src/afd/sprites/back-cosmetic",
    )

    dest("afd-back-shiny");
    sel(
        "src/afd/sprites/back-shiny",
        "src/afd/sprites/back-shiny-cosmetic",
    );

    dest("dex");
    sel(
        "build/padded-dex/canonical/front",
        "build/padded-dex/canonical/front-cosmetic",
    );

    dest("dex-shiny");
    sel(
        "build/padded-dex/canonical/front-shiny",
        "build/padded-dex/canonical/front-shiny-cosmetic",
    );

    dest("misc");
    sel(
        "src/canonical/ui/battle/Alpha.png",
        "src/canonical/ui/battle/Mega.png",
        "src/canonical/ui/battle/Omega.png",
    );
});

dest("trainers");
sel("build/padded-trainers/canonical");

function fixTypes(dst) {
    return dst.replace("Unknown", "???");
}

dest("types");
transform(fixTypes, () => {
    sel(
        "src/canonical/ui/types/gen4",
        "src/noncanonical/ui/types/gen4"
    );
});