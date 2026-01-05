<?php

namespace App\Entity;

use App\Repository\CategoryRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use App\Entity\Car;

#[ORM\Entity(repositoryClass: CategoryRepository::class)]
class Category {

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;


    #[ORM\Column(length: 255)]
    private ?string $name = null;    


    #[ORM\Column(length: 500, nullable: true)]
    private ?string $description = null;    


    #[ORM\OneToMany(targetEntity: Car::class, mappedBy: 'category')]
    private Collection $cars;


    public function __construct() {
        $this->cars = new ArrayCollection();
    }

    public function setId(int $id): void {
        $this->id =$id;
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function setName(string $name): void {
        $this->name = $name;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setDescription(?string $description): void {
        $this->description = $description;
    }

    public function getDescription(): ?string {
        return $this->description;
    }

    public function getCars(): Collection {
        return $this->cars;
    }

    public function addCar(Car $car): static {
        if (!$this->cars->contains($car)) {
            $this->cars->add($car);
            $car->setCategory($this);
        }
        return $this;
    }

    public function removeCar(Car $car): static {
        if ($this->cars->removeElement($car)) {
            if ($car->getCategory() === $this) {
                $car->setCategory(null);
            }
        }
        return $this;
    }

}
