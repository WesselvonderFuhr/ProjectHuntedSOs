package com.example.hunted.models;

import java.util.List;

public class Player {
    private String name;
    private String role;
    private boolean arrested;
    private List<String> loot;

    public Player(String name, String role, boolean arrested, List<String> loot) {
        this.name = name;
        this.role = role;
        this.arrested = arrested;
        this.loot = loot;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String isRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public boolean isArrested() {
        return arrested;
    }

    public void setArrested(boolean arrested) {
        this.arrested = arrested;
    }

    public List<String> getLoot() {
        return loot;
    }

    public int getLootCount() {
        return loot.size();
    }

    public void setLoot(List<String> loot) {
        this.loot = loot;
    }

}
